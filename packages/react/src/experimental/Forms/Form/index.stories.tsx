import type { Meta, StoryObj } from "@storybook/react-vite"

import { UseFormReturn } from "react-hook-form"
import { number, z } from "zod"

import { F0Button } from "@/components/F0Button"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Select } from "@/components/F0Select"
import { Textarea } from "@/ui/textarea"

import { AutoGrid } from "../../Utilities/Layout/AutoGrid"
import { Input } from "../Fields/Input"
import { NumberInput } from "../Fields/NumberInput"
import { FormField } from "../FormField"
import { useFormSchema } from "../lib/useForm"
import { Form, FormActions } from "./index"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const meta = {
  title: "Form",
  tags: ["autodocs", "experimental"],
  parameters: { a11y: { skipCi: true } },
  args: {},
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    const schema = z
      .object({
        username: z
          .string()
          .min(2)
          .max(10)
          .refine((username) => username !== "admin", {
            message: "Username cannot be admin",
          }),
        fullName: z.string().min(6).max(50),
        email: z.string().email(),
        password: z.string().min(8).max(50),
        passwordConfirmation: z.string(),
        bio: z.string().max(500),
        tag: z.string(),
        acceptedTerms: z.boolean(),
      })
      .refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      })

    const form = useFormSchema(
      schema,
      {
        defaultValues: {
          username: "",
          fullName: "",
          email: "",
          acceptedTerms: false,
        },
      },
      async (data) => {
        await sleep(2000)
        alert(`Form has been submitted: ${JSON.stringify(data)}`)

        return { success: true }
      }
    )

    return (
      <Form {...form}>
        <FormField
          label="Username"
          description="Write your username"
          control={form.control}
          name="username"
        >
          {(field) => (
            <Input
              label="Username"
              placeholder="A username must be all letters"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Full name"
          description="Write your full name"
          control={form.control}
          name="fullName"
        >
          {(field) => (
            <Input
              label="Full name"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Email"
          description="Write your email"
          control={form.control}
          name="email"
        >
          {(field) => (
            <Input
              label="Email"
              type="email"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Password"
          description="Write your password"
          control={form.control}
          name="password"
        >
          {(field) => (
            <Input
              label="Password"
              type="password"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Password Confirmation"
          description="Confirm your password"
          control={form.control}
          name="passwordConfirmation"
        >
          {(field) => (
            <Input
              label="Password Confirmation"
              type="password"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Biography"
          description="Write something about you"
          control={form.control}
          name="bio"
        >
          {(field) => (
            <Textarea
              label="Biography"
              {...field}
              value={field.value ? String(field.value) : undefined}
            />
          )}
        </FormField>

        <FormField
          label="Tag"
          description="Select a tag"
          control={form.control}
          name="tag"
        >
          {(field) => (
            <F0Select
              label="Tag"
              {...field}
              value={field.value ? String(field.value) : undefined}
              placeholder="Select something"
              options={[
                { label: "Foo", value: "foo" },
                { label: "Bar", value: "bar" },
              ]}
            />
          )}
        </FormField>

        <FormField
          label="Accept terms"
          description="Accept terms and conditions"
          control={form.control}
          name="acceptedTerms"
        >
          {(field) => (
            <F0Checkbox
              {...field}
              onCheckedChange={field.onChange}
              value={String(field.value)}
            />
          )}
        </FormField>

        <FormActions submitLabel="Create" form={form} />
      </Form>
    )
  },
}

export const AsyncFieldValidation: Story = {
  render() {
    const schema = z.object({
      username: z.string().refine(
        async (username) => {
          await sleep(200)
          return username !== "taken"
        },
        { message: "already taken" }
      ),
    })

    const form = useFormSchema(schema, {}, async () => {
      await sleep(1000)
      alert("Form has been submitted")

      return { success: true }
    })

    return (
      <Form {...form}>
        <FormField
          label="Username"
          description="Write your username"
          control={form.control}
          name="username"
        >
          {(field) => (
            <Input
              label="Username"
              placeholder="Try 'taken' as a username"
              {...field}
            />
          )}
        </FormField>

        <FormActions form={form} submitLabel="Create" />
      </Form>
    )
  },
}

export const AsyncSubmit: Story = {
  render() {
    const schema = z.object({ comment: z.string() })

    const form = useFormSchema(schema, {}, async () => {
      await sleep(2000)

      return {
        success: false,
        rootMessage: "Server error",
        errors: { comment: "Couln't create comment" },
      }
    })

    return (
      <Form {...form}>
        <FormField
          label="Comment"
          description="Write your username"
          control={form.control}
          name="comment"
        >
          {(field) => (
            <Textarea
              label="Comment"
              placeholder="Add your comment"
              {...field}
            />
          )}
        </FormField>

        <FormActions form={form} submitLabel="Create" />
      </Form>
    )
  },
}

export const MultipleTypeSchema: Story = {
  render() {
    const animalSchema = z.object({ name: z.string(), eating: z.boolean() })

    const fishSchema = animalSchema.merge(
      z.object({ type: z.literal("fish"), swimming: z.boolean() })
    )

    const dogSchema = animalSchema.merge(
      z.object({ type: z.literal("dog"), running: z.boolean() })
    )

    const fishForm = useFormSchema(
      fishSchema,
      {
        defaultValues: {
          name: "Nemo",
          eating: false,
          type: "fish",
          swimming: true,
          // running: false this will trigger an error. TS will let you know this is not valid for this schema.
        },
      },
      async (data) => {
        alert(`Form has been submitted: ${JSON.stringify(data)}`)

        return { success: true }
      }
    )

    const dogForm = useFormSchema(
      dogSchema,
      {
        defaultValues: {
          name: "Fluffy",
          type: "dog",
          eating: false,
          running: true,
        },
      },
      async (data) => {
        alert(`Form has been submitted: ${JSON.stringify(data)}`)

        return { success: true }
      }
    )

    return (
      <div>
        <div>
          <h3>Fish form:</h3>
          <Form {...fishForm}>
            <FormField
              label="Name"
              description="Write a name"
              control={fishForm.control}
              name="name"
            >
              {(field) => (
                <Input
                  label="Name"
                  placeholder="Try 'taken' as a username"
                  {...field}
                  value={String(field.value)}
                />
              )}
            </FormField>

            <FormField
              label="Eating"
              description="Is the animal eating?"
              control={fishForm.control}
              name="eating"
            >
              {(field) => (
                <F0Checkbox
                  {...field}
                  onCheckedChange={field.onChange}
                  value={String(field.value)}
                  checked={Boolean(field.value)}
                />
              )}
            </FormField>

            <FormField
              label="Swimming"
              description="Is the animal swimming?"
              control={fishForm.control}
              name="swimming"
            >
              {(field) => (
                <F0Checkbox
                  {...field}
                  onCheckedChange={field.onChange}
                  value={String(field.value)}
                  checked={Boolean(field.value)}
                />
              )}
            </FormField>

            <FormActions form={fishForm} submitLabel="Create" />
          </Form>
        </div>

        <br />
        <div>
          <h3>Dog form:</h3>
          <Form {...dogForm}>
            <FormField
              label="Name"
              description="Write a name"
              control={dogForm.control}
              name="name"
            >
              {(field) => (
                <Input
                  label="Name"
                  placeholder="Try 'taken' as a username"
                  {...field}
                  value={String(field.value)}
                />
              )}
            </FormField>

            <FormField
              label="Eating"
              description="Is the animal eating?"
              control={dogForm.control}
              name="eating"
            >
              {(field) => (
                <F0Checkbox
                  {...field}
                  onCheckedChange={field.onChange}
                  value={String(field.value)}
                  checked={Boolean(field.value)}
                />
              )}
            </FormField>

            <FormField
              label="Running"
              description="Is the animal running?"
              control={dogForm.control}
              name="running"
            >
              {(field) => (
                <F0Checkbox
                  {...field}
                  onCheckedChange={field.onChange}
                  value={String(field.value)}
                  checked={Boolean(field.value)}
                />
              )}
            </FormField>

            <FormActions form={dogForm} submitLabel="Create" />
          </Form>
        </div>
      </div>
    )
  },
}

export const NestedSchemas: Story = {
  render() {
    // SCHEMAS
    const itemSchema = z.object({
      quantity: number().min(1),
      price: number().min(0),
      comment: z.string().optional(),
    })

    const schema = z.object({
      total: number().min(0),
      items: itemSchema.array().nonempty(),
    })

    // TYPES
    type FormType = UseFormReturn<z.infer<typeof schema>>
    type SubFormType = UseFormReturn<z.infer<typeof itemSchema>>

    // FORM definitions
    const form = useFormSchema(
      schema,
      { defaultValues: { items: [], total: 0 } },
      async (data) => {
        alert(`Form has been submitted: ${JSON.stringify(data)}`)

        return { success: true }
      }
    )

    interface SubFormProps {
      form: FormType
    }

    const SubForm = ({ form }: SubFormProps) => {
      const subForm = useFormSchema(
        itemSchema,
        { defaultValues: {} },
        async (_data) => {
          return { success: true }
        }
      )

      subForm.watch("quantity")
      subForm.watch("price")
      subForm.watch("comment")

      const addItem = (quantity: number, price: number, comment?: string) => {
        form.setValue("items", [
          ...form.getValues().items,
          { quantity: quantity, price: price, comment: comment },
        ])

        form.trigger()
      }

      const handleAddItem = (subForm: SubFormType) => {
        const { quantity, price, comment } = subForm.getValues()

        subForm.trigger().then(() => {
          const valid =
            !subForm.getFieldState("quantity").error &&
            !subForm.getFieldState("price").error &&
            !subForm.getFieldState("comment").error

          if (!valid) {
            if (subForm.getFieldState("quantity").error) {
              alert(
                "Quantity " + subForm.getFieldState("quantity").error?.message
              )
            }

            if (subForm.getFieldState("price").error) {
              alert("Price " + subForm.getFieldState("price").error?.message)
            }

            if (subForm.getFieldState("comment").error) {
              alert(
                "Comment " + subForm.getFieldState("comment").error?.message
              )
            }
          } else {
            addItem(quantity, price, comment)
          }
        })
      }

      return (
        <div>
          <AutoGrid gap="4">
            <FormField
              label=""
              description="Quantity"
              control={subForm.control}
              name="quantity"
            >
              {(field) => (
                <NumberInput
                  label="Quantity"
                  {...field}
                  step={1}
                  value={Number(field.value) || 0}
                  locale="en-US"
                  onChange={(value) => {
                    subForm.setValue("quantity", Number(value))
                  }}
                />
              )}
            </FormField>

            <FormField
              label=""
              description="Price"
              control={subForm.control}
              name="price"
            >
              {(field) => (
                <NumberInput
                  {...field}
                  label="Price"
                  value={Number(field.value) || 0}
                  locale="en-US"
                  onChange={(value) => {
                    subForm.setValue("price", Number(value))
                  }}
                />
              )}
            </FormField>

            <FormField
              label=""
              description="Write something about this item"
              control={subForm.control}
              name="comment"
            >
              {(field) => (
                <Input
                  label="Comment"
                  placeholder="Add your comment"
                  {...field}
                />
              )}
            </FormField>

            <div className="mt-3">
              <F0Button
                variant="neutral"
                label="Add an item"
                type="button"
                onClick={(event) => {
                  event.preventDefault()
                  handleAddItem(subForm)
                }}
              />
            </div>
          </AutoGrid>
        </div>
      )
    }

    return (
      <Form {...form}>
        <SubForm form={form} />

        {form
          .getValues()
          .items.map((item: z.infer<typeof itemSchema>, index: number) => {
            return (
              <div key={index}>
                {item.quantity} x {item.price} Comment: {item.comment}
              </div>
            )
          })}

        {form.formState.errors.items && (
          <div>{form.formState.errors.items.message}</div>
        )}
        <div className="mt-3">
          <FormActions form={form} submitLabel="Submit" />
        </div>
      </Form>
    )
  },
}
