import { DEFAULT_IMG } from '@workspace/assets';
import Image, { ImageProps } from 'next/image';
import { forwardRef, useEffect, useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallback?: ImageProps['src'];
}

export const ImageWithFallback = forwardRef<
  HTMLImageElement,
  ImageWithFallbackProps
>(
  (
    { fallback = DEFAULT_IMG, alt, src, ...props }: ImageWithFallbackProps,
    ref
  ) => {
    const [error, setError] = useState<React.SyntheticEvent<
      HTMLImageElement,
      Event
    > | null>(null);

    useEffect(() => {
      setError(null);
    }, [src]);

    return (
      <Image
        ref={ref}
        alt={alt}
        onError={setError}
        src={error ? fallback : src}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full"
        {...props}
      />
    );
  }
);
