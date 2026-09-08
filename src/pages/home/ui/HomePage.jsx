import { Card } from "../../../shared/ui/card/ui/Card"
import { SkeletonCard } from "../../../shared/ui/skeleton-card/ui/SkeletonCard"

export const HomePage = () => {
    let series={"season": '1', "episode": 2, "minutesWatched": 10, "minutesAll": 20 }

    return (
        <>
        <div style=
            {{display: 'grid',
            gap: '10px',
            gridTemplateColumns: "repeat(4, 200px)",
            alignItems: 'start',
            justifyContent: 'center',
            gridTemplateRows: "repeat(2, 300px)"
        }}>
            <Card name='Изгнанный читер-чародей наслаждается беззаботной второй жизнью: Я могу накладывать «очки усиления» не только на оружие, но и на что угодно, в любой момент отменяя эффект по собственной воле, а с теми, кто остался, всё нормально?' rating='9.8'/>
            <Card name='Магическая Битва' series={series}/>
            <Card name='Магическая Битва' rating='9.8'/>
            <Card name='Магическая Битва' rating='9.8'/>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
        </>
    )
}
