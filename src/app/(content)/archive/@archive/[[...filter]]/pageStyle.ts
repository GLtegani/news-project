"use client";

import styled from "styled-components";

export const ArchiveHeader = styled.header`
  ul {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    a {
      text-decoration: none;
      color: #b0b0a6;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1.25rem;

      &:hover,
      &.active {
        color: #e5e5e1;
      }
    }
  }
`;
