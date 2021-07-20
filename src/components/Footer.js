import React from "react";

import Text from "./primitives/Text";
import Link from "./primitives/Link";

const Footer = () => {
  return (
    <footer>
      <Text>
        Developed by
        <Link target="blank" href="https://github.com/angieTu">
          Angie Turne
        </Link>
      </Text>
    </footer>
  );
};

export default Footer;
