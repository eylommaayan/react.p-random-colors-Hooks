import React, { useEffect, useState } from "react";
import Title from "../../components/Title";

export default function RandomizeColor() {
  const [pageColor, setPageColor] = useState("#ffffff");
  const [btnColors, setBtnColors] = useState({
    danger: "#dc3545",
    success: "#198754",
    primary: "#0d6efd",
    warning: "#ffc107",
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
    return color;
  }

  // מחיל את צבע הדף בכל שינוי
  useEffect(() => {
    document.body.style.background = pageColor;
    return () => { /* ניקוי לא חובה כאן, רק דוגמה */ };
  }, [pageColor]);

  // לוגיקה לכפתור שמשנה גם את הדף וגם את עצמו
  const handleChange = (key) => {
    const newPage = getRandomColor();
    const newBtn = getRandomColor();
    setPageColor(newPage);
    setBtnColors((prev) => ({ ...prev, [key]: newBtn }));
  };

  return (
    <div className="container m-auto text-center" dir="rtl">
      <Title text="שינוי צבעים רנדומלי" classes="mb-4" />

      <button
        className="btn btn-danger m-1"
        style={{ backgroundColor: btnColors.danger }}
        onClick={() => handleChange("danger")}
        aria-label="שנה צבע דף וכפתור מסוכן"
      >
        לחץ עלי
      </button>

      <button
        className="btn btn-success m-1"
        style={{ backgroundColor: btnColors.success }}
        onClick={() => handleChange("success")}
        aria-label="שנה צבע דף וכפתור מוצלח"
      >
        לחץ עלי
      </button>

      <button
        className="btn btn-primary m-1"
        style={{ backgroundColor: btnColors.primary }}
        onClick={() => handleChange("primary")}
        aria-label="שנה צבע דף וכפתור ראשי"
      >
        לחץ עלי
      </button>

      <button
        className="btn btn-warning m-1"
        style={{ backgroundColor: btnColors.warning }}
        onClick={() => handleChange("warning")}
        aria-label="שנה צבע דף וכפתור אזהרה"
      >
        לחץ עלי
      </button>
    </div>
  );
}
