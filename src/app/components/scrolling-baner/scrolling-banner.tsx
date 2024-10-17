import React from 'react';
import style from './scrolling-banner.module.css';

const ScrollingAnimation = () => {
    const scrollStyle = {'--t': '20s'} as React.CSSProperties;
    const scrollStyle2 = {'--t': '15s'} as React.CSSProperties;
    const scrollStyle3 = {'--t': '25s'} as React.CSSProperties;
    const scrollStyle4 = {'--t': '35s'} as React.CSSProperties;
    const scrollStyle5 = {'--t': '25s'} as React.CSSProperties;


    return (
        <div className={style.wrapper}>
            <div className={style.scroll} style={scrollStyle}>
                <div>
                    <span>Вкусно и точка</span>
                    <span>SUBWAY</span>
                    <span>OZON</span>
                    <span>Алгоритмика</span>
                    <span>MET TEA</span>
                    <span>MEDIA PRO</span>
                    <span>SOKOLOV</span>
                    <span>ACOOLA</span>
                    <span>Sneak Fresh</span>
                    <span>Хачапури Марико</span>
                    <span>Суши Wok</span>
                    <span>PROSTO BARISTA</span>
                </div>
            </div>
            <div className={style.scroll} style={scrollStyle2}>
                <div>
                    <span>X-ONE</span>
                    <span>COFFEESHOP COMPANY</span>
                    <span>Настоящая пекарня</span>
                    <span>Звёзды</span>
                    <span>Pedant.ru</span>
                    <span>VR-GAMES</span>
                    <span>Пол - это Лава</span>
                    <span>Капля</span>
                    <span>CMD</span>
                    <span>ИНВИТРО</span>
                    <span>Пятёрочка</span>
                    <span>ПЭК</span>
                </div>
                <div>
                </div>
            </div>
            <div className={style.scroll} style={scrollStyle3}>
                <div>
                    <span>СДЭК</span>
                    <span>EpicNeon</span>
                    <span>PANDA</span>
                    <span>Quiksilver</span>
                    <span>Hobby Games</span>
                    <span>IL Патио</span>
                    <span>ХОЧУ ПУРИ</span>
                    <span>BurgerCLUB</span>
                    <span>Lifehacker Coffee</span>
                    <span>Championika Digital</span>
                    <span>Полиглотики</span>
                    <span>STARFOODS</span>
                    <span>СДЭК</span>
                    <span>EpicNeon</span>
                    <span>PANDA</span>
                    <span>Quiksilver</span>
                    <span>Hobby Games</span>
                    <span>IL Патио</span>
                    <span>ХОЧУ ПУРИ</span>
                    <span>BurgerCLUB</span>
                    <span>Lifehacker Coffee</span>
                    <span>Championika Digital</span>
                    <span>Полиглотики</span>
                    <span>STARFOODS</span>

                </div>
            </div>
            <div className={style.scroll} style={scrollStyle4}>
                <div>
                    <span>Coral Travel</span>
                    <span>WARPOINT</span>
                    <span>Мокрый нос</span>
                    <span>АККОНД</span>
                    <span>Фасоль</span>
                    <span>Яндекс Лавка</span>
                    <span>Вкусно и точка</span>
                    <span>SUBWAY</span>
                    <span>OZON</span>
                    <span>Алгоритмика</span>
                    <span>MET TEA</span>
                    <span>MEDIA PRO</span>
                    <span>SOKOLOV</span>
                    <span>ACOOLA</span>
                    <span>Sneak Fresh</span>
                    <span>Хачапури Марико</span>
                    <span>Суши Wok</span>
                    <span>PROSTO BARISTA</span>
                </div>
            </div>
            <div className={style.scroll} style={scrollStyle5}>
                <div className={style.scroll__imgBox}>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=2089&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1546900703-cf06143d1239?auto=format&fit=crop&q=80&w=2050&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=2089&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1564865878688-9a244444042a?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1546900703-cf06143d1239?auto=format&fit=crop&q=80&w=2050&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                    <img alt={'img_unsplash'}
                         src={'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
                </div>
            </div>
        </div>
    );
};

export default ScrollingAnimation;
