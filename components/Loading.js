

class Loading extends React.Component {

    render() {
        const { loadingClassName } = this.props;

        const clasName = loadingClassName === "hidden" ? "loading loading-hidden" : "loading"

        return (
            <div className={clasName}>
                <img src="../public/assets/loading.gif" alt="loading"/>
            </div>
        );
    }

}

Loading.propTypes = {
    loadingClassName: React.PropTypes.string
}

window.App.Loading = Loading;