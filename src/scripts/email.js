export function initialiseFormSubjectUpdater(targetID, nameID, emailID)
{
    const target = document.getElementById(targetID);
    const name = document.getElementById(nameID);
    const email = document.getElementById(emailID);

    name.addEventListener('input', () =>
    {
        target.value = "New Enquiry - " + name.value + " - " + email.value;
    });

    email.addEventListener('input', () =>
    {
        target.value = "New Enquiry - " + name.value + " - " + email.value;
    });
}