"use client";

import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  ul {
    display: flex;
    gap: 2rem;
    font-weight: bold;

    a {
      text-decoration: none;
      color: #e5e5e1;
      padding: 0.5rem 1rem;
      border-radius: 4px;

      &:hover,
      &:active {
        background-color: #bcbcb7;
        color: #181817;
      }
    }
  }
`;

export const Logo = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  border-radius: 4px;

  a {
    color: #e1e1d7;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: white;
    }
  }
`;
