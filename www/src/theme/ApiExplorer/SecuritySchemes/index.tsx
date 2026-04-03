import React from "react";
import Link from "@docusaurus/Link";
import { useTypedSelector } from "@theme/ApiItem/hooks";
import { ApiDataContext } from "../../ApiItem";
import styles from "./styles.module.css";

const ROLE_TYPE_LABELS: Record<string, string> = {
  CorpusRole: "Corpus Roles",
  AgentRole: "Agent Roles",
  ApiRole: "API Roles",
};

const ROLE_TYPE_COLORS: Record<string, string> = {
  CorpusRole: "#045dda",
  AgentRole: "#a86f1b",
  ApiRole: "#249719",
};

function formatRoleName(role: string): string {
  return role.replace(/_/g, " ");
}

function SecuritySchemes(props: any) {
  const options = useTypedSelector((state: any) => state.auth.options);
  const selected = useTypedSelector((state: any) => state.auth.selected);
  const requiredRoles = React.useContext(ApiDataContext);
  const infoAuthPath = `/${props.infoPath}#authentication-methods`;

  if (selected === undefined) return null;
  if (options[selected]?.[0]?.type === undefined) return null;

  const authNames = Object.values(options)
    .flat()
    .map((a: any) => a.name ?? a.key ?? a.type)
    .filter((v: string, i: number, arr: string[]) => arr.indexOf(v) === i);

  return (
    <details className="openapi-security__details" open={true}>
      <summary className="openapi-security__summary-container">
        <h4 className="openapi-security__summary-header">
          Authorization: {authNames.join(" or ")}
        </h4>
      </summary>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "var(--openapi-card-background-color)",
          padding: "12px",
          borderRadius: "4px",
          gap: "8px",
        }}
      >
        <span>
          <strong>methods: </strong>
          {authNames.map((name, i) => (
            <React.Fragment key={name}>
              {i > 0 && ", "}
              <Link to={infoAuthPath}>{name}</Link>
            </React.Fragment>
          ))}
        </span>
        {requiredRoles.length > 0 && (
          <div className={styles.rolesSection}>
            {requiredRoles.map((r) => (
              <div key={r.type} className={styles.roleRow}>
                <strong>{ROLE_TYPE_LABELS[r.type] || r.type}: </strong>
                {r.roles.map((role) => (
                  <span
                    key={role}
                    className={styles.roleBadge}
                    style={{
                      backgroundColor: ROLE_TYPE_COLORS[r.type] || "#69707d",
                    }}
                  >
                    {formatRoleName(role)}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </details>
  );
}

export default SecuritySchemes;
