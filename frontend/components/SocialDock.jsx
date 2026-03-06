"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Mail, Instagram, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const DOCK_ITEMS = [
    { icon: Mail, href: "mailto:pr.ingenium@iiti.ac.in", color: "text-green-500" },
    { icon: Instagram, href: "https://www.instagram.com/ingeniumxfluxus_iit_indore", color: "text-rose-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/fluxus---iit-indore/", color: "text-sky-500" },
    { icon: Twitter, href: "https://x.com/fluxusiiti_", color: "text-blue-500" },
    { icon: Facebook, href: "https://www.facebook.com/fluxusiiti/", color: "text-blue-500" },
    { icon: Youtube, href: "https://www.youtube.com/@fluxusiitindore", color: "text-red-500" },
];

function DockItem({ item, mouseX, mouseY, isMobile }) {
    const ref = useRef(null);

    // Use the mouse position to calculate layout-specific distance
    // Mobile layout defaults to flex-row (horizontal => distance on X axis)
    // Desktop layout defaults to flex-col (vertical => distance on Y axis)
    const distance = useTransform([mouseX, mouseY], ([latestX, latestY]) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, y: 0, width: 0, height: 0 };
        if (isMobile) {
            // Horizontal mode
            return latestX - bounds.x - bounds.width / 2;
        } else {
            // Vertical mode
            return latestY - bounds.y - bounds.height / 2;
        }
    });

    // Calculate scaling effect
    const scaleSync = useTransform(distance, [-100, 0, 100], [1, 1.8, 1]);
    // Use a smooth spring physics
    const scale = useSpring(scaleSync, { damping: 15, mass: 0.1, stiffness: 200 });

    return (
        <Link href={item.href} target="_blank" className={item.color}>
            <motion.div
                ref={ref}
                style={{ scale }}
                whileHover={{ scale: 1.8 }}
                className="flex items-center justify-center origin-bottom sm:origin-left z-50 p-1 md:p-2"
            >
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </motion.div>
        </Link>
    );
}

export default function SocialDock({ isMobile }) {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useMotionValue(Infinity);

    return (
        <div
            className="flex flex-row sm:flex-col gap-3 md:gap-4 absolute bottom-12 left-6 md:left-15 z-50 items-end sm:items-start"
            onMouseMove={(e) => {
                mouseX.set(e.pageX);
                mouseY.set(e.pageY);
            }}
            onMouseLeave={() => {
                mouseX.set(Infinity);
                mouseY.set(Infinity);
            }}
        >
            {DOCK_ITEMS.map((item, i) => (
                <DockItem key={i} item={item} mouseX={mouseX} mouseY={mouseY} isMobile={isMobile} />
            ))}
        </div>
    );
}
