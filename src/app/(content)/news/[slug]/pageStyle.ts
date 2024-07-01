"use client";

import Image from "next/image";
import styled from "styled-components";

export const NewsArticle = styled.article`
  h1 {
    margin-bottom: 1rem;
  }

  header {
    margin-bottom: 1rem;
  }
`;

export const NewsImage = styled(Image)`
  width: 7rem;
  margin-bottom: 1rem;
  border-radius: 4px;
`;
