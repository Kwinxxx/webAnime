import { Card } from "../../../shared/ui/card/ui/Card"
import { SkeletonCard } from "../../../shared/ui/skeleton-card/ui/SkeletonCard"

export const HomePage = () => {
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
            <Card name='Изгнанный читер-чародей наслаждается беззаботной второй жизнью: Я могу накладывать «очки усиления» не только на оружие, но и на что угодно, в любой момент отменяя эффект по собственной воле, а с теми, кто остался, всё нормально?'/>
            <Card name='Магическая Битва'/>
            <Card name='Магическая Битва'/>
            <Card name='Магическая Битва'/>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
        </>
    )
}
