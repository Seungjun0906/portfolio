import { useRef } from "react";
import * as styles from "./ContactSection.css";
import { motion } from "framer-motion";
import SectionTitle from "@/components/shared/SectionTitle";
import { Mail, Github, Linkedin, ChatBubble } from "iconoir-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const contactItems = [
    {
      title: "Email",
      value: "dev.seungjunkim@gmail.com",
      icon: <Mail width={20} height={20} />,
      link: "mailto:dev.seungjunkim@gmail.com",
      description: "Feel free to reach out for collaboration or opportunities",
    },
    {
      title: "Linkedin",
      value: "Jun's Linkedin",
      icon: <Linkedin width={20} height={20} />,
      link: "https://www.linkedin.com/in/seungjunkim0906/",
      description: "Connect with me on Linkedin for professional networking",
    },
    {
      title: "Github",
      value: "Jun's Github",
      icon: <Github width={20} height={20} />,
      link: "https://github.com/seungjun0906",
      description: "Check out my open-source projects and contributions",
    },
    {
      title: "Blog",
      value: "Jun's Blog",
      icon: <ChatBubble width={20} height={20} />,
      link: "https://kim-seungjun.tistory.com/",
      description: "Read my technical articles and development thoughts",
    },
  ];

  return (
    <div className={styles.container} ref={sectionRef} id="contact">
      <div className={styles.content}>
        <SectionTitle title="Contact" />

        <motion.div
          className={styles.contactGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className={styles.contactHeading}>{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.iconWrapper}>{item.icon}</span>
                {item.value}
              </a>
              <p className={styles.contactDescription}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
