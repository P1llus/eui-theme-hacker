/** @jsxImportSource @emotion/react */
/**
 * Placeholder Page
 *
 * Generic placeholder for pages under construction.
 */

import {
  EuiButton,
  EuiEmptyPrompt,
  EuiPageTemplate,
  useEuiTheme,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import { useGlowText } from "../hooks/useThemeStyles";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export function Placeholder({ title, description }: PlaceholderProps) {
  const { euiTheme } = useEuiTheme();
  const titleGlow = useGlowText(euiTheme.colors.primary);
  const navigate = useNavigate();

  return (
    <EuiPageTemplate.Section>
      <EuiEmptyPrompt
        iconType="wrench"
        title={<h2 css={titleGlow}>{title}</h2>}
        body={
          <p>
            {description || "This page is under construction. Check back soon!"}
          </p>
        }
        actions={
          <EuiButton onClick={() => navigate("/")}>Back to Home</EuiButton>
        }
      />
    </EuiPageTemplate.Section>
  );
}

export default Placeholder;
