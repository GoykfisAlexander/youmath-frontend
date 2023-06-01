import styles from "./popular-category-card.module.scss";
import { Text } from "../ui/typography/text/text";
import { RightArrowIcon } from "../ui/icons/right-arrow-icon";
import { FC } from "react";
import { Link } from "react-router-dom";
import { CategoryResource } from "../../api/types/resource/category-resource";
import { startPage } from "../../data/ constants";

interface PopularCategoryCardProps {
  category: CategoryResource;
}

const CategoryCard: FC<PopularCategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`${startPage}/category/${category.id}`}
      style={{ textDecoration: "none" }}
    >
      <div className={styles.popularCategoryCard}>
        <div className={styles.popularCategoryCard__info}>
          <Text size="large" textType="text" textColor="black">
            {category.title}
          </Text>
          {category.author && (
            <Text size="small" textType="text" textColor="dim">
              {category.author}
            </Text>
          )}
        </div>
        <RightArrowIcon classname={styles.popularCategoryCard__arrow} />
      </div>
    </Link>
  );
};
export default CategoryCard;
