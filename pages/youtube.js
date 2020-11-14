const Youtube = ({ stars }) => {
    return <div>Next stars: {stars}</div>
}

Youtube.getInitialProps = async ({ res }) => {
    res.writeHead(307, {
        Location: 'http://youtube.com/codarme'
    })

    res.end()
}

export default Youtube



