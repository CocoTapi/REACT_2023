import NewsletterSignup from "../NewsletterSignup";
import PageContent from "../PageContent";

function NewsletterPage () {
    return (
        <PageContent>
            <NewsletterSignup />
        </PageContent>
    )
};

export default NewsletterPage;

export const action = async function ({ request }) {
    const data = await request.formData();
    const email = data.get('email');
    console.log(email);

    // const response = await fetch('http://localhost:8080/newsletter', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(email)
    // });

    return { message: 'Signup successful!'}
}