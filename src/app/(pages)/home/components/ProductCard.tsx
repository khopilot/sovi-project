import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedSection.module.css';
import type { FeaturedProduct } from './data/featured-products';

interface ProductCardProps {
  product: FeaturedProduct;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`${styles.productCard} ${className}`}>
      <div className={styles.productImage}>
        {isClient && (
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className={styles.image}
            priority
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>
      <div className={styles.productInfo}>
        <span className={styles.category} data-category={product.category}>
          {product.category}
        </span>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.keyIngredient}>
          <span className={styles.keyIngredientLabel}>Key Ingredients:</span>
          <span className={styles.keyIngredientValue}>{product.keyIngredient}</span>
        </div>
        <Link 
          href={`/products#${product.id}`}
          className={styles.learnMoreButton}
          aria-label={`Learn more about ${product.name}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
} 