class YoutubeEmbed extends HTMLElement {
  connectedCallback() {
    const videoId = this.getAttribute("videoid")
    this.innerHTML = `
      <iframe src="https://www.youtube-nocookie.com/embed/${videoId}?rel=0&iv_load_policy=3"></iframe>
    `
  }
}

customElements.define("youtube-embed", YoutubeEmbed);