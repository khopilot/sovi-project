interface Window {
  FB?: {
    init: (options: {
      xfbml: boolean;
      version: string;
    }) => void;
    XFBML: {
      parse: () => void;
    };
  };
} 