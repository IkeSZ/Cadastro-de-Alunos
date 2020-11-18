import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 15px 28px 15px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #d7d3cd;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
    margin-right: 20px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    border: 1px solid #251940;
    background: #251940;
    border-radius: 5px;
    padding: 10px;

    transition: all 280ms;
    &:hover {
      color: #eee;
      background: #160e26;
    }
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
`;

export const CdA = styled.p`
  display: flex;
  color: #fff;
  margin-left: 30px;
  font-weight: bolder;
`;
