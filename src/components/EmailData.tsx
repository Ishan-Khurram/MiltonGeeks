// post json data to app/contact.ts
// This function will be wired to <form onSubmit={emailSubmission}>.
export default async function emailSubmission(
  e: React.FormEvent<HTMLFormElement>
) {
  // prevent default page reload so we can send email in its place.
  e.preventDefault();

  const fd = new FormData(e.currentTarget);
  // read data from form element.

  // turn form data into parsable json data.
  const payload = {
    name: String(fd.get("name") || ""),
    phone: String(fd.get("phone") || ""),
    email: String(fd.get("email") || ""), // email not added yet, mostlikely want phone calls back as its faster. Put here for later use.
    message: String(fd.get("message") || ""),
  };

  const r = await fetch("/api/contact", {
    method: "POST",
    // tell the server we are sending JSON so vercel can parse req.body correctly
    headers: { "Content-Type": "application/json" },
    // turn json into string for http request body
    body: JSON.stringify(payload),
  });

  if (r.ok) {
    // 2xx response = success

    e.currentTarget.reset(); // clear the form so they know it went through

    // prompt alert so they know 100% form went through and it didnt get discarded.
    // can change later to a nicer UI, alert works for now.
    alert("Thanks! We recieved your message. We will be in touch very soon.");
  } else {
    // anything other than a 2xx code is a fail. extract server message for help.

    const { error } = await r.json().catch(() => ({ error: "Unknown Error" }));

    // alert with the error message
    // change later to cleaner UI

    alert(
      `Sorry! Something went wrong. Your message could not be sent ${error}`
    );
  }
}
