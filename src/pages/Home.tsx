const Home = () => <div>
    <img src={'flower.jpg'} alt="logo" className="w-full h-80 object-cover" />
    <h1 className="text-2xl font-bold text-center pb-8 pt-8">СПК "Луч"</h1>
    <p className="text-center">СПК "Луч" - это небольшой, но теплый и дружный коллектив, который живет в одном из красивых районов Свердловской области.</p>
    <p className="text-center">Наша цель - создать уютную и дружную атмосферу в нашем коллективе.</p>
    <h2 className="text-2xl font-bold text-left pb-8 pt-16">Последние новости</h2>
    <div className="flex flex-col gap-4 border border-gray-200 pb-8 rounded-lg pt-4">
        <p className="text-sm text-gray-500 pl-4">17.06.2025</p>
        <h3 className="text-lg font-bold pl-4">Общесадовое собрание — 30 июня</h3>
        <p className="pl-4">Уважаемые садоводы!
Очередное собрание членов СНТ состоится 30 июня в 12:00 у правления. На повестке дня — отчёт за полугодие, обсуждение бюджета и благоустройства. Приглашаем всех!</p>
    </div>
</div>
export default Home 
