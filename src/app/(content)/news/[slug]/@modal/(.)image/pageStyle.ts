"use client";

import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const DialogModal = styled.dialog`
  background-color: #bababa;
  padding: 2rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 10px 0 #181817;
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;

  h1,
  h2 {
    margin: 0;
  }
`;
