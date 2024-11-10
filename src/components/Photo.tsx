// Interface defining the properties required by the Photo component
interface PhotoProps {
  src: string; // URL source of the image
  alt: string; // Alt text for accessibility
}

// Component to display a single photo item in a list
const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <li>
      {/* Image element using the provided src and alt attributes */}
      <img src={src} alt={alt} />
    </li>
  );
};

export default Photo;
