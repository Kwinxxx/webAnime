import { Card } from "../../../shared/ui/card/ui/Card"
import { SkeletonCard } from "../../../shared/ui/skeleton-card/ui/SkeletonCard"

export const HomePage = () => {
    return (
        <>
            <div style={{
                display: 'grid',
                gap: '8px',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 150px))'
            }}>
                <Card name='Lorem Ipsum is simply dumdsadasdasdasdas' series='2'/>
                <Card name='Ванпис'/>
                <Card name='Наруто' series='2'/>
                <Card name='Ванпис'/>
                <SkeletonCard />
            </div>
        </>
    )
}
