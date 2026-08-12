"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { links, profile } from "@/data/content";
import { SectionHeading } from "@/components/SectionHeading";

const contactMethods = [
  {
    label: "Email",
    value: links.email,
    href: `mailto:${links.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "x-khalid-x",
    href: links.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "khalid-chliyahe",
    href: links.linkedin,
    icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Discutons"
          description={profile.status + " — n'hésite pas à me contacter."}
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-3xl border border-card-border bg-card p-8 text-center transition-colors hover:border-accent"
            >
              <span className="flex size-12 items-center justify-center rounded-full gradient-bg text-white transition-transform group-hover:scale-110">
                <method.icon size={20} />
              </span>
              <span className="text-sm font-medium">{method.label}</span>
              <span className="text-sm text-muted">{method.value}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
