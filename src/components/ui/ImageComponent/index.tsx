import Image, { ImageLoader, ImageProps } from 'next/image'

const ImageComponent: React.FC<ImageProps> = ({ src, alt = '', ...rest }) => {
  const myLoader: ImageLoader = ({ src }) => {
    return `https://res.cloudinary.com/ascension-protocol/image/upload/v1655240855/ASCENSION${src}`
  }
  return <Image loader={myLoader} src={src} alt={alt} {...rest} />
}

export default ImageComponent
