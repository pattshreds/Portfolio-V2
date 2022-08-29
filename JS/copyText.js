const copyText = () => {
    let text = document.getElementById('email-text').innerHTML;
    navigator.clipboard.writeText(text).then(() => {
        alert('copied to clipboard!');
    })
}