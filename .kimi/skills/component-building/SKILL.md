---
name: component-building
description: Guidelines for building UI components with shadcn/ui as the primary design system
---

# Component Building Skill

## Core Principle

**Always check for shadcn/ui components FIRST before building custom components.**

shadcn/ui provides a comprehensive, well-designed component library built on Radix UI primitives. Using shadcn ensures consistency, accessibility, and saves development time.

## Workflow

### 1. Check shadcn/ui Registry First

Before creating any component, check if it exists in the shadcn/ui registry:

```bash
# Check available components
pnpm dlx shadcn@latest add --help

# Or visit https://ui.shadcn.com/docs/components
```

Common shadcn components include:
- **Layout**: Card, Collapsible, Resizable, ScrollArea, Separator, Sheet, Skeleton
- **Forms**: Button, Checkbox, Input, Textarea, Select, Switch, RadioGroup, Slider, Calendar, DatePicker
- **Navigation**: Breadcrumb, Command, ContextMenu, DropdownMenu, Menubar, NavigationMenu, Tabs, Pagination
- **Feedback**: Alert, AlertDialog, Dialog, Drawer, HoverCard, Popover, Progress, Sonner (toast), Tooltip
- **Data Display**: Accordion, Avatar, Badge, Carousel, Chart, Table, Toggle, ToggleGroup
- **Overlay**: Dialog, Sheet, Drawer, Popover, Tooltip, ContextMenu

### 2. Install Existing shadcn Component

If the component exists in shadcn:

```bash
pnpm dlx shadcn@latest add <component-name>
```

Example:
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add dropdown-menu
```

### 3. Check Third-Party Registries

If not in the official registry, check:
- **@magicui** - Animated components and effects
- **@aceternity** - Premium animated components
- **@react-bits** - Animated, interactive React components
- **@motion-primitives** - Beautiful motion components
- **@@eldoraui** - Modern React components
- **@@animata** - Hand-crafted animations & effects
- **@uploadthing** - File upload components

Install with:
```bash
pnpm dlx shadcn@latest add @magicui/marquee
pnpm dlx shadcn@latest add @aceternity/floating-navbar
```

### 4. Build Custom Component (Last Resort)

Only build a custom component when:
- No shadcn equivalent exists
- No suitable third-party registry component exists
- The design requires highly specific behavior

When building custom:
- Use Radix UI primitives as the foundation (same as shadcn)
- Follow shadcn's styling patterns (Tailwind CSS)
- Match the project's design system (colors, spacing, typography)
- Ensure accessibility (ARIA labels, keyboard navigation)
- Place in `components/ui/` or `components/custom/` directory

## Component Architecture

### File Structure
```
components/
├── ui/                    # shadcn components (auto-generated)
│   ├── button.tsx
│   ├── card.tsx
│   └── dialog.tsx
├── custom/                # Custom components (when necessary)
│   └── complex-chart.tsx
└── shared/                # Project-specific shared components
    └── navbar.tsx
```

### Styling Guidelines

1. **Use Tailwind CSS** - All shadcn components use Tailwind
2. **CSS Variables** - Use the project's CSS variables for theming
3. **cn() utility** - Use the `cn()` utility for conditional class merging:
   ```tsx
   import { cn } from "@/lib/utils";
   
   className={cn(
     "base-classes",
     variant === "primary" && "primary-classes",
     className
   )}
   ```

### Props Pattern

Follow shadcn's variant pattern using `cva` (class-variance-authority):

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

## Quick Reference

### Most Common shadcn Components

| Component | Usage | Install Command |
|-----------|-------|-----------------|
| Button | Actions, CTAs | `pnpm dlx shadcn@latest add button` |
| Card | Content containers | `pnpm dlx shadcn@latest add card` |
| Dialog | Modals, popups | `pnpm dlx shadcn@latest add dialog` |
| Input | Form text fields | `pnpm dlx shadcn@latest add input` |
| Form | Form handling | `pnpm dlx shadcn@latest add form` |
| Select | Dropdown selection | `pnpm dlx shadcn@latest add select` |
| Table | Data display | `pnpm dlx shadcn@latest add table` |
| Tabs | Content switching | `pnpm dlx shadcn@latest add tabs` |
| Toast | Notifications | `pnpm dlx shadcn@latest add sonner` |
| Dropdown Menu | Context menus | `pnpm dlx shadcn@latest add dropdown-menu` |

### shadcn + Next.js App Router

Components work seamlessly with Next.js App Router. No special configuration needed.

### Form Handling

For forms, use shadcn's Form component (built on React Hook Form + Zod):

```bash
pnpm dlx shadcn@latest add form
```

## Decision Tree

```
Need a component?
    │
    ▼
┌─────────────────────┐
│ Check shadcn/ui     │
│ official registry   │
└──────────┬──────────┘
    │
    ├── Yes → Install with `pnpm dlx shadcn@latest add <name>`
    │
    └── No
        │
        ▼
┌─────────────────────┐
│ Check third-party   │
│ registries          │
└──────────┬──────────┘
    │
    ├── Yes → Install from registry
    │
    └── No
        │
        ▼
┌─────────────────────┐
│ Build custom using  │
│ Radix primitives    │
└─────────────────────┘
```

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Component Registry](https://ui.shadcn.com/docs/components)
- [shadcn Registry Explorer](https://ui.shadcn.com/registry)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
