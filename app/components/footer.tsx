import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="rounded-none">
        <CardContent className="p-5 text-center">
          <p className="text-sm text-gray-03">
            Desenvolvido com 🤍 por{" "}
            <span className="hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/in/vanessa-a-santana/"
                className="font-bold text-primary-purple underline-offset-2 hover:underline"
                target="_blank"
              >
                Vanessa Santana
              </a>
            </span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
