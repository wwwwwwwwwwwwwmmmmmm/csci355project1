import './aboutstyle.css';
export default function About() {
    return (
        <div>
            <h1><strong>Who We Are</strong></h1>

            <p><br />An Asian cuisine restaurant, serving a variety of East Asian food.</p>

            <div id="container">
                <section>
                    <img src="https://www.worldometers.info/img/flags/ch-flag.gif" alt="China-flag" />
                    <footer>China</footer>
                </section>

                <section>
                    <img src="https://www.worldometers.info/img/flags/th-flag.gif" alt="Thailand-flag" />
                    <footer>Thailand</footer>
                </section>

                <section>
                    <img src="https://www.worldometers.info/img/flags/vm-flag.gif" alt="Vietnam-flag" />
                    <footer>Vietnam</footer>
                </section>

                <section>
                    <img src="https://www.worldometers.info/img/flags/ja-flag.gif" alt="Japan-flag" />
                    <footer>Japan</footer>
                </section>
            </div>
        </div>
    );
}
