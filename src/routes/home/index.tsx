interface HomeProps {
    text?: string;
}
function Home({text = 'Home'}: HomeProps) {
    return (
        <>{text}</>
    )
}

export default Home
