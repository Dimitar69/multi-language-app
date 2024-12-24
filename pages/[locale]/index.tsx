"use client";
import { useTranslations } from 'next-intl';
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import { useState } from 'react';


export default function LocalePage() {
  const t = useTranslations('common'); 
  const router = useRouter();
  const currentLocale = router.query.locale as string;

   const [selectedLanguage, setSelectedLanguage] = useState<{
    code: string;
    name: string;
    flag: string;
  } | null>(null);

   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

   const handleLanguageClick = (langCode: string) => {
    const selectedLang = languages.find((lang) => lang.code === langCode);
    if (selectedLang) setSelectedLanguage(selectedLang);
    setIsDropdownVisible(false); 
  };
  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev); 
  };
  
  const languages = [
    { code: "en", name: "English", flag: "https://flagcdn.com/w320/us.png" },
    { code: "fr", name: "French", flag: "https://flagcdn.com/w320/fr.png" },
    { code: "es", name: "Spanish", flag: "https://flagcdn.com/w320/es.png" },
    { code: "mk", name: "Macedonian", flag: "https://flagcdn.com/w320/mk.png" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.localHeading}>{t("welcome")}</h1>
        <p className={styles.localParagraph}>{t("description")}</p>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.dropdown}>
        <button className={styles.dropbtn} onClick={toggleDropdown}>
  {selectedLanguage ? (
    <>
      <img
        src={selectedLanguage.flag}
        alt={`${selectedLanguage.name} flag`}
        className={styles.flag}
      />
      {selectedLanguage.name}
    </>
  ) : (
    "Select Language"
  )}
</button>
         {isDropdownVisible && 
        <div className={styles["dropdown_content"]}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={
                lang.code === currentLocale ? styles.currentLanguage : ""
              }
              style={{
                backgroundColor: lang.code === selectedLanguage?.code ? "#F76C6C" : "#FFFFFF", 
                color: lang.code === selectedLanguage?.code ? "white" : "black", 
                cursor: "pointer", 
                borderRadius: "5px", 
                padding: "10px",
              }}
              onClick={() => handleLanguageClick(lang.code)} 
            >
              {lang.code === currentLocale ? (
                <a>
                  {lang.flag && (
                    <img
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      className={styles.flag}
                    />
                  )}
                  {lang.name} (Current)
                </a>
              ) : (
                <Link href={`/${lang.code}`}>
                  {lang.flag && (
                    <img
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      className={styles.flag}
                    />
                  )}
                  {lang.name}
                </Link>
              )}
            </li>
          ))}
        </div>
        }
      </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { locale: string } }) {
  const messages = await import(`../../messages/${params.locale}.json`);
  return {
    props: {
      messages: messages.default,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'fr' } },
      { params: { locale: 'es' } },
      { params: { locale: 'mk' } },

    ],
    fallback: false,
  };
}


