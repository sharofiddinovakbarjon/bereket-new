import React from 'react'
import styles from "./HeaderTop.module.scss"
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// SVGs
import discount from "@/assets/SVGs/discount.svg"

// Components
import { SelectItem } from "@/components"

const HeaderTop: React.FC = () => {

  const { t } = useTranslation()

  return (
    <section className={styles.headerTop}>
      <div className="container">
        <div className={styles.inner}>
          <a href="#" className={styles['discount-btn']}>
            <img src={discount} alt="" />
            {t('discounts')}
          </a>

          <div className={styles.right}>
            {/* Header menu */}

            <ul className={styles["header-menu"]}>
              <li className={styles["header-menu_item"]}>
                <Link
                  to={"/favorites"}
                  className={styles["header-menu_item__link"]}
                >
                  {t("favourites")}
                </Link>
              </li>
              <li className={styles["header-menu_item"]}>
                <Link
                  to={"/cart"}
                  className={styles["header-menu_item__link"]}
                >
                  {t("cart")}
                </Link>
              </li>
              <li className={styles["header-menu_item"]}>
                <Link
                  to="/orders"
                  className={styles["header-menu_item__link"]}
                >
                  {t("orders")}
                </Link>
              </li>
            </ul>

            {/* Select Item */}
            <SelectItem type="language" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderTop