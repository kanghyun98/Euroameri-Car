import styled from '@emotion/styled';

export const BrandBoxWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 33.3%;
  padding: 5px 10px;
`;

export const BrandBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const BrandLogo = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 3px;
`;

export const BrandLogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const BrandName = styled.p`
  font-size: 0.75rem;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 8px;
`;
