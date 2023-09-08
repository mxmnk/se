// Behavioral
// Many objects subscribe to events that are broadcast from another object
// one-to-many relationship
// Loop that unfolds over the dimension of time

import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe((v) => console.log(v + 'via Den TV'));
const tv2 = news.subscribe((v) => console.log(v + 'via Batcave TV'));
const tv3 = news.subscribe((v) => console.log(v + 'via Airport TV'));

news.next('Breaking news: ');
news.next('The war is over ');

tv1.unsubscribe();
