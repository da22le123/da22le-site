import data from "../../../public/resume.json";
import "./ResumePage.css";

type Resume = typeof data;

function formatRange(start?: string, end?: string) {
  const fmt = (ym?: string) => {
    if (!ym) return "";
    const [y, m = "01"] = ym.split("-");
    return new Date(Number(y), Number(m) - 1).toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  const s = fmt(start);
  const e = end ? fmt(end) : "Present";
  return s ? `${s} – ${e}` : e;
}

export default function ResumePage() {
  const resume: Resume = data;

  return (
    <div className="resume-page">
      <div className="resume-container">
        <div className="resume-header">
          <div className="header">
            <h1>{resume.basics.name}</h1>
            <p>{resume.basics.label}</p>
            <div className="resume-contact">
              <a href={`mailto:${resume.basics.email}`}>{resume.basics.email}</a>
              {resume.basics.phone && <span>{resume.basics.phone}</span>}
              {resume.basics.profiles?.map((p) => (
                <a key={p.url} href={p.url} target="_blank" rel="noreferrer">
                  {p.network}
                </a>
              ))}
            </div>
          </div>
            

          <a href="/resume.pdf" target="_blank" rel="noreferrer">Download PDF</a>
        </div>

        <section className="resume-section">
          <h2>Summary</h2>
          <p>{resume.basics.summary}</p>
        </section>

        <section className="resume-section">
          <h2>Experience</h2>
          {resume.work.map((w, i) => (
            <div key={i} className="resume-work-item">
              <div className="resume-meta">
                {formatRange(w.startDate, w.endDate)} {w.location && `• ${w.location}`}
              </div>
              <h3>
                {w.name} — {w.position}
              </h3>
              <p>{w.summary}</p>
              <ul className="resume-highlights">
                {w.highlights?.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {resume.education.map((e, i) => (
            <div key={i} className="resume-edu-item">
              <div className="resume-meta">
                {formatRange(e.startDate, e.endDate)} {e.location && `• ${e.location}`}
              </div>
              <h3>
                {e.institution} — {e.studyType}
              </h3>
              <p>{e.area}</p>
            </div>
          ))}
        </section>

        {resume.languages?.length > 0 && (
          <section className="resume-section">
            <h2>Languages</h2>
            <p>{resume.languages.map((l) => l.language).join(" • ")}</p>
          </section>
        )}

        {resume.interests?.length > 0 && (
          <section className="resume-section">
            <h2>Interests</h2>
            <p>{resume.interests.map((i) => i.name).join(" • ")}</p>
          </section>
        )}
      </div>
    </div>
  );
}
