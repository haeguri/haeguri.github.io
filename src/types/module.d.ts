declare module "gatsby-plugin-disqus" {
  import React from "react";

  export const Disqus: React.FC<{
    config: {
      identifier: string;
      title: string;
      url?: string;
      language?: string;
      remoteAuthS3?: string;
      apiKey?: string;
    };
  }>;

  export const CommentCount: React.FC<{
    config: {
      identifier: string;
      title: string;
      url?: string;
    };
    placeholder?: string;
  }>;

  export const CommentEmbed: React.FC<{
    commentId: string;
    width?: number;
    height?: number;
    showMedia?: boolean;
    showParentComment?: boolean;
  }>;
}
