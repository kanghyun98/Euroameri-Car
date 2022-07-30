import styled from '@emotion/styled';

// TODO: 디자인 수정
export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  padding: 0 3rem;
  background-color: whitesmoke;
`;

export const FlagWrapper = styled.img`
  width: 100px;
  height: 40px;
`;

export const CompInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  padding: 5px 0;
`;

export const EmailArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Text = styled.p`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`;
