"use client";

import Image from "next/image";
import styled from "styled-components";

export const NewsItemsList = styled.ul`
  display: grid;
  margin-top: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    color: #e5e5e1;
    text-decoration: none;
    border-radius: 4px;
    font-size: 1.2rem;
    padding: 0 0 1rem 0;

    &:hover {
      background-color: #2d2d2b;
    }
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  border-radius: 4px;
`;
