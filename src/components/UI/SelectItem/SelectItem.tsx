import React from 'react'
import styles from "./SelectItem.module.scss";
import { PiGlobe } from 'react-icons/pi';
import { convertLanguage } from '@/utils/convertLanguage';
import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa6';

interface IProps {
  type: "language";
}

const SelectItem: React.FC<IProps> = ({ type }) => {

  const { i18n } = useTranslation();
  const languages: string[] = Object.keys(i18n.options.resources || {});

  return (
    <div className={styles.selectItem}>
      <div className={styles.selected}>
        <span>
          <PiGlobe />
        </span>
        <p>{convertLanguage(i18n.language)}</p>
        <span>
          <FaAngleDown />
        </span>
        <div className={styles.menu}>
          {languages.map((item, index) => (
            <p key={index} onClick={() => {
              i18n.changeLanguage(item)
              localStorage.setItem("language", item)
            }}>
              {convertLanguage(item)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectItem