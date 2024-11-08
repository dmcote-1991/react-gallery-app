interface PhotoProps {
  src: string;
  alt: string;
}

// Component to display a single photo
const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

export default Photo;
