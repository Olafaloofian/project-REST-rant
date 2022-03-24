const React = require('react');
const Default = require('./default');

function home () {
    return (
    <Default>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/salad.jpg" alt="Salad" style={{width: 200}}/>
                <div>
                    Photo by <a href=""></a>
                </div>
            </div>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Default>
    );
};

module.exports = home;