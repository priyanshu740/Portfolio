import { TypeAnimation } from "react-type-animation";

const TextAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Full stack developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Web develoepr',
          1000,
          'Programmer',
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="text-[2rem] md:text-[3rem] text-black"
        repeat={Infinity}
      />
    );
  };

export default TextAnimation;