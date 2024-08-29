import StyledMainContent from "./MainContent.styles";

interface MainContentProps {
  children?: React.ReactNode;  // Agora é opcional
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <StyledMainContent>{children}</StyledMainContent>;
};

export default MainContent;
