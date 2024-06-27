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

   .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.85);
      display: flex;
      justify-content: center;
      align-items: center;
   }
   
   .modal {
      background-color: #bababa;
      padding: 2rem;
      border-radius: 4px;
      border: none;
      box-shadow: 0 0 10px 0 #181817;
      max-width: 50rem;
      width: 100%;
   }

   .modal h2,
   .modal h1 {
      margin: 0;
   }

   #archive-header ul {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
   }

   #archive-header ul a {
      text-decoration: none;
      color: #b0b0a6;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1.25rem;
   }

   #archive-header ul a:hover,
   #archive-header ul a.active {
      color: #e5e5e1;
   }

   #archive-filter {
      margin-bottom: 2rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #b0b0a6;
   }

`;

export const NotFoundContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;
