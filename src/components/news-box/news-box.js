import React from 'react';
import Spinner from '../spinner';

import { connect } from 'react-redux';
import withDataService from '../hoc/with-data-service';
import { itemsLoaded, itemsRequested, itemsError } from '../../actions';

import './news-box.scss';

function getDate(date) {
    const dat = new Date(date);
    return `${dat.getDay()}.${dat.getMonth()+1}.${dat.getFullYear()%100}`;

}

const Article = ({data}) => {

    return (
        <div className="article-item">
            <div className="img"><img src={data.thread.main_image?data.thread.main_image:"/logo512.png"}/></div>
            <h5>{data.title?data.title:data.thread.title}</h5>
            <span className="article-date">{getDate(data.published)}</span>
            <div className="source"><a href={data.url}>Источник</a></div>
            <p className="article-text">{data.text}</p>
        </div>
    )
}

class NewsBox extends React.Component {

    componentDidMount() {
        this.getItems();
    }

    getItems = () => {
        const {
            dataService,
            itemsLoaded,
            itemsRequested,
            itemsError
        } = this.props;
        
        itemsRequested();
        dataService.getNews()
            .then((data) => {
                itemsLoaded(data);
            })
            .catch((err) => {
                itemsError(err);
            });
    }

    render() {
        const { items, loading } = this.props;

        if (loading) {
            return <section className="sect-news"><Spinner /></section>;
        }

        return (
            <section className="sect-news">
                <div className="news">
                    {
                        items.map((item) => {
                            return (
                                <Article key={item.uuid} data={item}/>
                            )
                        })
                    }
                    {
                        items.length===0 ? <p className="no_data">Нет новостей!</p> : undefined
                    }
                </div>
            </section>
        );
    };
}

const mapStateToProps = ({ itemList:{items,loading} }) => {
    return { items,loading };
};

const mapDispatchToProps = {
    itemsLoaded,
    itemsRequested,
    itemsError
};


export default withDataService()(
    connect(mapStateToProps, mapDispatchToProps)(NewsBox));