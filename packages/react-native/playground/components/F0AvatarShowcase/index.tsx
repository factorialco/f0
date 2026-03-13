import React from "react"
import { ScrollView, View } from "react-native"

import {
  Bell,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Coffee,
  Globe,
  Heart,
  Home,
  Lightbulb,
  LockLocked,
  Pencil,
  Person,
  Star,
} from "../../../src/icons/app"
import { F0Avatar } from "../../../src/components/F0Avatar"
import { F0Text } from "../../../src/components/primitives/F0Text"

export function F0AvatarShowcase() {
  const sectionTitle = (text: string) => (
    <F0Text variant="heading-sm" color="default" className="mb-3">
      {text}
    </F0Text>
  )

  const subTitle = (text: string) => (
    <F0Text variant="body-sm-medium" color="secondary" className="mb-2">
      {text}
    </F0Text>
  )

  return (
    <ScrollView
      className="p-4"
      contentContainerStyle={{ paddingBottom: 40 }}
      style={{ width: "100%" }}
    >
      {/* ═══════════════════════════════════════════
          PERSON
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Person — All Sizes (initials)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person firstName="John" lastName="Doe" size="xs" />
        <F0Avatar.Person firstName="John" lastName="Doe" size="sm" />
        <F0Avatar.Person firstName="John" lastName="Doe" size="md" />
        <F0Avatar.Person firstName="John" lastName="Doe" size="lg" />
        <F0Avatar.Person firstName="John" lastName="Doe" size="xl" />
        <F0Avatar.Person firstName="John" lastName="Doe" size="2xl" />
      </View>

      {sectionTitle("F0Avatar.Person — All Sizes (with image)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="xs"
        />
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="sm"
        />
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="md"
        />
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="lg"
        />
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="xl"
        />
        <F0Avatar.Person
          firstName="Ada"
          lastName="Lovelace"
          src="https://i.pravatar.cc/150?u=ada"
          size="2xl"
        />
      </View>

      {sectionTitle("F0Avatar.Person — Deactivated (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person firstName="Old" lastName="User" size="xs" deactivated />
        <F0Avatar.Person firstName="Old" lastName="User" size="sm" deactivated />
        <F0Avatar.Person firstName="Old" lastName="User" size="md" deactivated />
        <F0Avatar.Person firstName="Old" lastName="User" size="lg" deactivated />
        <F0Avatar.Person firstName="Old" lastName="User" size="xl" deactivated />
        <F0Avatar.Person
          firstName="Old"
          lastName="User"
          size="2xl"
          deactivated
        />
      </View>

      {sectionTitle("F0Avatar.Person — Module Badges (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="xs"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="sm"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="md"
          badge={{ type: "module", module: "calendar" }}
        />
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="lg"
          badge={{ type: "module", module: "calendar" }}
        />
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="xl"
          badge={{ type: "module", module: "documents" }}
        />
        <F0Avatar.Person
          firstName="Jane"
          lastName="Smith"
          size="2xl"
          badge={{ type: "module", module: "timeoff" }}
        />
      </View>

      {sectionTitle("F0Avatar.Person — Icon Badge Types")}
      {subTitle("neutral / positive / highlight / warning / critical")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="A"
          lastName="N"
          size="lg"
          badge={{ type: "neutral", icon: Home }}
        />
        <F0Avatar.Person
          firstName="B"
          lastName="P"
          size="lg"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="C"
          lastName="H"
          size="lg"
          badge={{ type: "highlight", icon: Star }}
        />
        <F0Avatar.Person
          firstName="D"
          lastName="W"
          size="lg"
          badge={{ type: "warning", icon: Clock }}
        />
        <F0Avatar.Person
          firstName="E"
          lastName="C"
          size="lg"
          badge={{ type: "critical", icon: LockLocked }}
        />
      </View>

      {sectionTitle("F0Avatar.Person — Icon Badges (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="xs"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="sm"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="md"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="lg"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="xl"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Person
          firstName="Alex"
          lastName="R"
          size="2xl"
          badge={{ type: "positive", icon: Check }}
        />
      </View>

      {/* ═══════════════════════════════════════════
          TEAM
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Team — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Team name="Engineering" size="xs" />
        <F0Avatar.Team name="Engineering" size="sm" />
        <F0Avatar.Team name="Engineering" size="md" />
        <F0Avatar.Team name="Engineering" size="lg" />
        <F0Avatar.Team name="Engineering" size="xl" />
        <F0Avatar.Team name="Engineering" size="2xl" />
      </View>

      {sectionTitle("F0Avatar.Team — With Image")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Team
          name="Design"
          src="https://i.pravatar.cc/150?u=team"
          size="sm"
        />
        <F0Avatar.Team
          name="Design"
          src="https://i.pravatar.cc/150?u=team"
          size="md"
        />
        <F0Avatar.Team
          name="Design"
          src="https://i.pravatar.cc/150?u=team"
          size="lg"
        />
      </View>

      {sectionTitle("F0Avatar.Team — Badges (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Team
          name="Dev"
          size="xs"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Team
          name="Dev"
          size="sm"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Team
          name="Dev"
          size="md"
          badge={{ type: "module", module: "calendar" }}
        />
        <F0Avatar.Team
          name="Dev"
          size="lg"
          badge={{ type: "positive", icon: Calendar }}
        />
        <F0Avatar.Team
          name="Dev"
          size="xl"
          badge={{ type: "module", module: "documents" }}
        />
        <F0Avatar.Team
          name="Dev"
          size="2xl"
          badge={{ type: "warning", icon: Bell }}
        />
      </View>

      {/* ═══════════════════════════════════════════
          COMPANY
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Company — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Company name="Factorial" size="xs" />
        <F0Avatar.Company name="Factorial" size="sm" />
        <F0Avatar.Company name="Factorial" size="md" />
        <F0Avatar.Company name="Factorial" size="lg" />
        <F0Avatar.Company name="Factorial" size="xl" />
        <F0Avatar.Company name="Factorial" size="2xl" />
      </View>

      {sectionTitle("F0Avatar.Company — With Image")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Company
          name="Google"
          src="https://i.pravatar.cc/150?u=company"
          size="sm"
        />
        <F0Avatar.Company
          name="Google"
          src="https://i.pravatar.cc/150?u=company"
          size="md"
        />
        <F0Avatar.Company
          name="Google"
          src="https://i.pravatar.cc/150?u=company"
          size="lg"
        />
      </View>

      {sectionTitle("F0Avatar.Company — Badges (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Company
          name="F"
          size="xs"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Company
          name="F"
          size="sm"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Company
          name="F"
          size="md"
          badge={{ type: "module", module: "calendar" }}
        />
        <F0Avatar.Company
          name="F"
          size="lg"
          badge={{ type: "positive", icon: Calendar }}
        />
        <F0Avatar.Company
          name="F"
          size="xl"
          badge={{ type: "module", module: "documents" }}
        />
        <F0Avatar.Company
          name="F"
          size="2xl"
          badge={{ type: "highlight", icon: Star }}
        />
      </View>

      {/* ═══════════════════════════════════════════
          EMOJI
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Emoji — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Emoji emoji="😀" size="sm" />
        <F0Avatar.Emoji emoji="😀" size="md" />
        <F0Avatar.Emoji emoji="😀" size="lg" />
      </View>

      {sectionTitle("F0Avatar.Emoji — Various Emojis")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Emoji emoji="🎉" size="md" />
        <F0Avatar.Emoji emoji="🚀" size="md" />
        <F0Avatar.Emoji emoji="🍑" size="md" />
        <F0Avatar.Emoji emoji="🌍" size="md" />
        <F0Avatar.Emoji emoji="💡" size="md" />
        <F0Avatar.Emoji emoji="❤️" size="md" />
        <F0Avatar.Emoji emoji="🏆" size="md" />
      </View>

      {sectionTitle("F0Avatar.Emoji — Invalid Emoji (fallback)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Emoji emoji="notanemoji" size="sm" />
        <F0Avatar.Emoji emoji="notanemoji" size="md" />
        <F0Avatar.Emoji emoji="notanemoji" size="lg" />
      </View>

      {/* ═══════════════════════════════════════════
          ICON
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Icon — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Icon icon={Calendar} size="sm" />
        <F0Avatar.Icon icon={Calendar} size="md" />
        <F0Avatar.Icon icon={Calendar} size="lg" />
      </View>

      {sectionTitle("F0Avatar.Icon — Various Icons")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Icon icon={Home} size="md" />
        <F0Avatar.Icon icon={Person} size="md" />
        <F0Avatar.Icon icon={Briefcase} size="md" />
        <F0Avatar.Icon icon={Globe} size="md" />
        <F0Avatar.Icon icon={Heart} size="md" />
        <F0Avatar.Icon icon={Lightbulb} size="md" />
        <F0Avatar.Icon icon={Coffee} size="md" />
        <F0Avatar.Icon icon={Pencil} size="md" />
      </View>

      {/* ═══════════════════════════════════════════
          FILE — All 13 Types
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.File — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.File file={{ name: "report.pdf" }} size="xs" />
        <F0Avatar.File file={{ name: "report.pdf" }} size="sm" />
        <F0Avatar.File file={{ name: "report.pdf" }} size="md" />
        <F0Avatar.File file={{ name: "report.pdf" }} size="lg" />
        <F0Avatar.File file={{ name: "report.pdf" }} size="xl" />
        <F0Avatar.File file={{ name: "report.pdf" }} size="2xl" />
      </View>

      {sectionTitle("F0Avatar.File — All File Types")}
      {subTitle("PDF, IMG, DOC, XLS, PPT, TXT, VID, AUD, ZIP, CSV, HTML, MD, default")}
      <View className="mb-2 flex-row flex-wrap items-end gap-3">
        <F0Avatar.File file={{ name: "contract.pdf" }} size="md" />
        <F0Avatar.File file={{ name: "photo.jpg" }} size="md" />
        <F0Avatar.File file={{ name: "readme.docx" }} size="md" />
        <F0Avatar.File file={{ name: "budget.xlsx" }} size="md" />
        <F0Avatar.File file={{ name: "slides.pptx" }} size="md" />
        <F0Avatar.File file={{ name: "notes.txt" }} size="md" />
        <F0Avatar.File file={{ name: "demo.mp4" }} size="md" />
      </View>
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.File file={{ name: "podcast.mp3" }} size="md" />
        <F0Avatar.File file={{ name: "backup.zip" }} size="md" />
        <F0Avatar.File file={{ name: "data.csv" }} size="md" />
        <F0Avatar.File file={{ name: "page.html" }} size="md" />
        <F0Avatar.File file={{ name: "docs.md" }} size="md" />
        <F0Avatar.File file={{ name: "unknown.bin" }} size="md" />
      </View>

      {sectionTitle("F0Avatar.File — All Types at Size lg")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.File file={{ name: "contract.pdf" }} size="lg" />
        <F0Avatar.File file={{ name: "photo.png" }} size="lg" />
        <F0Avatar.File file={{ name: "readme.docx" }} size="lg" />
        <F0Avatar.File file={{ name: "budget.xlsx" }} size="lg" />
        <F0Avatar.File file={{ name: "slides.pptx" }} size="lg" />
        <F0Avatar.File file={{ name: "notes.txt" }} size="lg" />
        <F0Avatar.File file={{ name: "demo.mp4" }} size="lg" />
        <F0Avatar.File file={{ name: "podcast.mp3" }} size="lg" />
        <F0Avatar.File file={{ name: "backup.zip" }} size="lg" />
        <F0Avatar.File file={{ name: "data.csv" }} size="lg" />
        <F0Avatar.File file={{ name: "page.html" }} size="lg" />
        <F0Avatar.File file={{ name: "docs.md" }} size="lg" />
        <F0Avatar.File file={{ name: "unknown.bin" }} size="lg" />
      </View>

      {sectionTitle("F0Avatar.File — Badges (module + icon)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.File
          file={{ name: "report.pdf" }}
          size="md"
          badge={{ type: "module", module: "documents" }}
        />
        <F0Avatar.File
          file={{ name: "budget.xlsx" }}
          size="lg"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.File
          file={{ name: "slides.pptx" }}
          size="xl"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.File
          file={{ name: "photo.png" }}
          size="2xl"
          badge={{ type: "warning", icon: Clock }}
        />
      </View>

      {/* ═══════════════════════════════════════════
          FLAG
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Flag — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Flag flag="ES" size="xs" />
        <F0Avatar.Flag flag="ES" size="sm" />
        <F0Avatar.Flag flag="ES" size="md" />
        <F0Avatar.Flag flag="ES" size="lg" />
      </View>

      {sectionTitle("F0Avatar.Flag — Various Countries")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Flag flag="US" size="md" />
        <F0Avatar.Flag flag="FR" size="md" />
        <F0Avatar.Flag flag="DE" size="md" />
        <F0Avatar.Flag flag="IT" size="md" />
        <F0Avatar.Flag flag="GB" size="md" />
        <F0Avatar.Flag flag="JP" size="md" />
        <F0Avatar.Flag flag="BR" size="md" />
        <F0Avatar.Flag flag="PT" size="md" />
        <F0Avatar.Flag flag="MX" size="md" />
        <F0Avatar.Flag flag="IN" size="md" />
      </View>

      {sectionTitle("F0Avatar.Flag — Badges (all sizes)")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Flag
          flag="US"
          size="xs"
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Flag
          flag="FR"
          size="sm"
          badge={{ type: "positive", icon: Check }}
        />
        <F0Avatar.Flag
          flag="DE"
          size="md"
          badge={{ type: "module", module: "calendar" }}
        />
        <F0Avatar.Flag
          flag="GB"
          size="lg"
          badge={{ type: "warning", icon: Bell }}
        />
      </View>

      {/* ═══════════════════════════════════════════
          ALERT
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Alert — All Types × All Sizes")}
      {subTitle("sm")}
      <View className="mb-3 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Alert alertType="critical" size="sm" />
        <F0Avatar.Alert alertType="warning" size="sm" />
        <F0Avatar.Alert alertType="info" size="sm" />
        <F0Avatar.Alert alertType="positive" size="sm" />
      </View>
      {subTitle("md")}
      <View className="mb-3 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Alert alertType="critical" size="md" />
        <F0Avatar.Alert alertType="warning" size="md" />
        <F0Avatar.Alert alertType="info" size="md" />
        <F0Avatar.Alert alertType="positive" size="md" />
      </View>
      {subTitle("lg")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Alert alertType="critical" size="lg" />
        <F0Avatar.Alert alertType="warning" size="lg" />
        <F0Avatar.Alert alertType="info" size="lg" />
        <F0Avatar.Alert alertType="positive" size="lg" />
      </View>

      {/* ═══════════════════════════════════════════
          DATE
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Date — Various Dates")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Date date={new Date(2025, 0, 1)} />
        <F0Avatar.Date date={new Date(2025, 3, 15)} />
        <F0Avatar.Date date={new Date(2025, 6, 10)} />
        <F0Avatar.Date date={new Date(2025, 11, 25)} />
      </View>

      {/* ═══════════════════════════════════════════
          MODULE
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.Module — All Sizes")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Module module="home" size="xxs" />
        <F0Avatar.Module module="home" size="xs" />
        <F0Avatar.Module module="home" size="sm" />
        <F0Avatar.Module module="home" size="md" />
        <F0Avatar.Module module="home" size="lg" />
        <F0Avatar.Module module="home" size="xl" />
      </View>

      {sectionTitle("F0Avatar.Module — Sample Modules")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Module module="home" size="lg" />
        <F0Avatar.Module module="calendar" size="lg" />
        <F0Avatar.Module module="documents" size="lg" />
        <F0Avatar.Module module="timeoff" size="lg" />
        <F0Avatar.Module module="performance" size="lg" />
        <F0Avatar.Module module="goals" size="lg" />
        <F0Avatar.Module module="shifts" size="lg" />
        <F0Avatar.Module module="engagement" size="lg" />
        <F0Avatar.Module module="tasks" size="lg" />
        <F0Avatar.Module module="ats" size="lg" />
        <F0Avatar.Module module="payroll_bundle" size="lg" />
        <F0Avatar.Module module="reports" size="lg" />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — Person
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — Person (all list sizes)")}
      {subTitle("xs")}
      <View className="mb-3">
        <F0Avatar.List
          type="person"
          size="xs"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
            { firstName: "Dan", lastName: "P" },
            { firstName: "Eva", lastName: "R" },
          ]}
          max={3}
        />
      </View>
      {subTitle("sm")}
      <View className="mb-3">
        <F0Avatar.List
          type="person"
          size="sm"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
            { firstName: "Dan", lastName: "P" },
          ]}
          max={3}
        />
      </View>
      {subTitle("md")}
      <View className="mb-6">
        <F0Avatar.List
          type="person"
          size="md"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
          ]}
          max={3}
        />
      </View>

      {sectionTitle("F0Avatar.List — Person with remainingCount")}
      <View className="mb-6">
        <F0Avatar.List
          type="person"
          size="md"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
          ]}
          max={3}
          remainingCount={42}
        />
      </View>

      {sectionTitle("F0Avatar.List — Person with images")}
      <View className="mb-6">
        <F0Avatar.List
          type="person"
          size="sm"
          avatars={[
            {
              firstName: "Ana",
              lastName: "G",
              src: "https://i.pravatar.cc/100?u=ana",
            },
            {
              firstName: "Ben",
              lastName: "T",
              src: "https://i.pravatar.cc/100?u=ben",
            },
            {
              firstName: "Cai",
              lastName: "L",
              src: "https://i.pravatar.cc/100?u=cai",
            },
            { firstName: "Dan", lastName: "P" },
            { firstName: "Eva", lastName: "R" },
          ]}
          max={4}
        />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — Team
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — Team (all list sizes)")}
      {subTitle("xs")}
      <View className="mb-3">
        <F0Avatar.List
          type="team"
          size="xs"
          avatars={[
            { name: "Engineering" },
            { name: "Design" },
            { name: "Product" },
            { name: "Marketing" },
          ]}
          max={3}
        />
      </View>
      {subTitle("sm")}
      <View className="mb-3">
        <F0Avatar.List
          type="team"
          size="sm"
          avatars={[
            { name: "Engineering" },
            { name: "Design" },
            { name: "Product" },
          ]}
          max={3}
        />
      </View>
      {subTitle("md")}
      <View className="mb-6">
        <F0Avatar.List
          type="team"
          size="md"
          avatars={[
            { name: "Engineering" },
            { name: "Design" },
            { name: "Product" },
            { name: "Marketing" },
            { name: "Sales" },
          ]}
          max={3}
        />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — Company
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — Company")}
      <View className="mb-6 gap-3">
        <F0Avatar.List
          type="company"
          size="sm"
          avatars={[
            { name: "Factorial" },
            { name: "Google" },
            { name: "Meta" },
          ]}
          max={2}
          remainingCount={5}
        />
        <F0Avatar.List
          type="company"
          size="md"
          avatars={[
            { name: "Factorial" },
            { name: "Google" },
            { name: "Meta" },
            { name: "Apple" },
          ]}
          max={3}
        />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — Flag
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — Flag (all list sizes)")}
      {subTitle("xs")}
      <View className="mb-3">
        <F0Avatar.List
          type="flag"
          size="xs"
          avatars={[
            { flag: "ES" },
            { flag: "FR" },
            { flag: "DE" },
            { flag: "IT" },
          ]}
          max={3}
        />
      </View>
      {subTitle("sm")}
      <View className="mb-3">
        <F0Avatar.List
          type="flag"
          size="sm"
          avatars={[
            { flag: "US" },
            { flag: "GB" },
            { flag: "JP" },
            { flag: "BR" },
          ]}
          max={3}
        />
      </View>
      {subTitle("md")}
      <View className="mb-6">
        <F0Avatar.List
          type="flag"
          size="md"
          avatars={[
            { flag: "ES" },
            { flag: "FR" },
            { flag: "DE" },
            { flag: "IT" },
            { flag: "PT" },
          ]}
          max={3}
        />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — File
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — File")}
      <View className="mb-6 gap-3">
        <F0Avatar.List
          type="file"
          size="sm"
          avatars={[
            { file: { name: "report.pdf" } },
            { file: { name: "data.xlsx" } },
            { file: { name: "photo.jpg" } },
            { file: { name: "notes.txt" } },
          ]}
          max={3}
        />
        <F0Avatar.List
          type="file"
          size="md"
          avatars={[
            { file: { name: "contract.pdf" } },
            { file: { name: "budget.xlsx" } },
            { file: { name: "doc.docx" } },
          ]}
          max={2}
          remainingCount={8}
        />
      </View>

      {/* ═══════════════════════════════════════════
          LISTS — Large Overflow
          ═══════════════════════════════════════════ */}
      {sectionTitle("F0Avatar.List — Large Overflow (+99)")}
      <View className="mb-6">
        <F0Avatar.List
          type="person"
          size="md"
          avatars={[
            { firstName: "A", lastName: "A" },
            { firstName: "B", lastName: "B" },
          ]}
          max={2}
          remainingCount={99}
        />
      </View>

      {sectionTitle("F0Avatar.List — xs Overflow (ellipsis icon)")}
      {subTitle("xs with overflow shows ellipsis instead of +N")}
      <View className="mb-3">
        <F0Avatar.List
          type="person"
          size="xs"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
            { firstName: "Dan", lastName: "P" },
          ]}
          max={2}
        />
      </View>
      {subTitle("xs with remainingCount also shows ellipsis")}
      <View className="mb-6">
        <F0Avatar.List
          type="team"
          size="xs"
          avatars={[{ name: "Engineering" }, { name: "Design" }]}
          max={2}
          remainingCount={10}
        />
      </View>

      {sectionTitle("F0Avatar.List — No Overflow (all visible)")}
      {subTitle("max >= avatars.length — last avatar is unclipped")}
      <View className="mb-6 gap-3">
        <F0Avatar.List
          type="person"
          size="md"
          avatars={[
            { firstName: "Ana", lastName: "G" },
            { firstName: "Ben", lastName: "T" },
            { firstName: "Cai", lastName: "L" },
          ]}
          max={5}
        />
        <F0Avatar.List
          type="team"
          size="sm"
          avatars={[{ name: "Engineering" }, { name: "Design" }]}
          max={3}
        />
      </View>

      {/* ═══════════════════════════════════════════
          POLYMORPHIC ROOT
          ═══════════════════════════════════════════ */}
      {sectionTitle("Polymorphic Root — All Types")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar
          avatar={{ type: "person", firstName: "Ada", lastName: "L" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "team", name: "Design" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "company", name: "Factorial" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "emoji", emoji: "🚀" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "icon", icon: Home }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "file", file: { name: "report.pdf" } }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "flag", flag: "ES" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "alert", alertType: "critical" }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "date", date: new Date(2025, 6, 10) }}
          size="md"
        />
        <F0Avatar
          avatar={{ type: "module", module: "home" }}
          size="md"
        />
      </View>

      {sectionTitle("Polymorphic Root — With Badges")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar
          avatar={{
            type: "person",
            firstName: "Ada",
            lastName: "L",
            badge: { type: "module", module: "home" },
          }}
          size="lg"
        />
        <F0Avatar
          avatar={{
            type: "company",
            name: "Factorial",
            badge: { type: "positive", icon: Check },
          }}
          size="lg"
        />
        <F0Avatar
          avatar={{
            type: "flag",
            flag: "ES",
            badge: { type: "module", module: "calendar" },
          }}
          size="lg"
        />
        <F0Avatar
          avatar={{
            type: "file",
            file: { name: "report.pdf" },
            badge: { type: "warning", icon: Clock },
          }}
          size="lg"
        />
      </View>

      {/* ═══════════════════════════════════════════
          EDGE CASES
          ═══════════════════════════════════════════ */}
      {sectionTitle("Edge Cases — Very Long Names")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Bartholomew"
          lastName="Christopherson"
          size="xs"
        />
        <F0Avatar.Person
          firstName="Bartholomew"
          lastName="Christopherson"
          size="md"
        />
        <F0Avatar.Team name="The Greatest Engineering Team Ever" size="md" />
        <F0Avatar.Company name="Superlongcompanyname Corp" size="md" />
      </View>

      {sectionTitle("Edge Cases — Single Character Names")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person firstName="A" lastName="B" size="xs" />
        <F0Avatar.Person firstName="A" lastName="B" size="sm" />
        <F0Avatar.Person firstName="A" lastName="B" size="md" />
        <F0Avatar.Person firstName="A" lastName="B" size="lg" />
        <F0Avatar.Person firstName="A" lastName="B" size="xl" />
        <F0Avatar.Person firstName="A" lastName="B" size="2xl" />
      </View>

      {sectionTitle("Edge Cases — Empty/Missing Data")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person firstName="" lastName="" size="md" />
        <F0Avatar.Team name="" size="md" />
        <F0Avatar.Company name="" size="md" />
      </View>

      {sectionTitle("Edge Cases — Deactivated with Image")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Gone"
          lastName="User"
          src="https://i.pravatar.cc/150?u=gone"
          size="md"
          deactivated
        />
        <F0Avatar.Person
          firstName="Gone"
          lastName="User"
          src="https://i.pravatar.cc/150?u=gone"
          size="lg"
          deactivated
        />
      </View>

      {sectionTitle("Edge Cases — Deactivated with Badge")}
      <View className="mb-6 flex-row flex-wrap items-end gap-3">
        <F0Avatar.Person
          firstName="Old"
          lastName="User"
          size="lg"
          deactivated
          badge={{ type: "module", module: "home" }}
        />
        <F0Avatar.Person
          firstName="Old"
          lastName="User"
          size="xl"
          deactivated
          badge={{ type: "warning", icon: Clock }}
        />
      </View>
    </ScrollView>
  )
}
