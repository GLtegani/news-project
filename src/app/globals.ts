"use client";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
   body {
      margin: 0;
      background-color: #181817;
      color: #e5e5e1;
   }

   ul {
      list-style: none;
      margin: 0;
      padding: 0;
   }

   .modal h2,
   .modal h1 {
      margin: 0;
   }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
