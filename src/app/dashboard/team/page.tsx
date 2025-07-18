// src/app/dashboard/team/page.tsx
"use client";

import React from "react";
import {
    Users,
    UserPlus,
    Mail,
    Shield,
    Edit,
    Trash2,
    Crown,
    Eye,
    Settings,
    X,
} from "lucide-react";

interface TeamMember {
    id: string;
    name: string;
    email: string;
    role: string;
    status: "active" | "pending" | "inactive";
    lastActive: string | null;
    avatar: string;
}

interface Role {
    id: string;
    name: string;
    description: string;
    permissions: string[];
    icon: React.ElementType;
    color: string;
}

const TeamPage: React.FC = () => {
    const [showInviteModal, setShowInviteModal] = React.useState(false);
    const [inviteEmail, setInviteEmail] = React.useState("");
    const [inviteRole, setInviteRole] = React.useState("analyst");

    const teamMembers: TeamMember[] = [
        {
            id: "1",
            name: "John Doe",
            email: "john@techcorp.com",
            role: "admin",
            status: "active",
            lastActive: "2024-01-20",
            avatar: "JD",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane@techcorp.com",
            role: "analyst",
            status: "active",
            lastActive: "2024-01-20",
            avatar: "JS",
        },
        {
            id: "3",
            name: "Bob Wilson",
            email: "bob@techcorp.com",
            role: "operator",
            status: "active",
            lastActive: "2024-01-19",
            avatar: "BW",
        },
        {
            id: "4",
            name: "Alice Brown",
            email: "alice@techcorp.com",
            role: "analyst",
            status: "pending",
            lastActive: null,
            avatar: "AB",
        },
    ];

    const roles: Role[] = [
        {
            id: "admin",
            name: "Admin",
            description: "Akses penuh ke semua fitur dan pengaturan",
            permissions: [
                "Dashboard",
                "Verifikasi",
                "Analitik",
                "API Settings",
                "Tim",
                "Billing",
            ],
            icon: Crown,
            color: "text-purple-600 bg-purple-100",
        },
        {
            id: "analyst",
            name: "Analyst",
            description: "Akses ke dashboard, verifikasi, dan analitik",
            permissions: ["Dashboard", "Verifikasi", "Analitik"],
            icon: Eye,
            color: "text-blue-600 bg-blue-100",
        },
        {
            id: "operator",
            name: "Operator",
            description: "Akses terbatas ke verifikasi dan dashboard",
            permissions: ["Dashboard", "Verifikasi"],
            icon: Settings,
            color: "text-green-600 bg-green-100",
        },
    ];

    const getRoleInfo = (roleId: string): Role => {
        return roles.find((role) => role.id === roleId) || roles[0];
    };

    const getStatusColor = (status: string): string => {
        switch (status) {
            case "active":
                return "text-green-600 bg-green-100";
            case "pending":
                return "text-yellow-600 bg-yellow-100";
            case "inactive":
                return "text-gray-600 bg-gray-100";
            default:
                return "text-gray-600 bg-gray-100";
        }
    };

    const getStatusText = (status: string): string => {
        switch (status) {
            case "active":
                return "Aktif";
            case "pending":
                return "Pending";
            case "inactive":
                return "Tidak Aktif";
            default:
                return "Tidak Aktif";
        }
    };

    const handleInviteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inviteEmail.trim()) return;

        // Here you would typically send the invitation to your backend
        alert(
            `Undangan berhasil dikirim ke ${inviteEmail} dengan role ${
                getRoleInfo(inviteRole).name
            }`
        );
        setInviteEmail("");
        setInviteRole("analyst");
        setShowInviteModal(false);
    };

    const handleRemoveMember = (memberId: string, memberName: string) => {
        if (
            window.confirm(
                `Apakah Anda yakin ingin menghapus ${memberName} dari tim?`
            )
        ) {
            // Here you would typically remove the member from your backend
            alert(`${memberName} telah dihapus dari tim`);
        }
    };

    const handleEditMember = (memberId: string) => {
        // Navigate to edit member page or open edit modal
        console.log("Edit member:", memberId);
    };

    const handleCloseModal = () => {
        setShowInviteModal(false);
        setInviteEmail("");
        setInviteRole("analyst");
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-[#1C252C]">
                        Manajemen Tim
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Kelola anggota tim dan hak akses mereka
                    </p>
                </div>

                <button
                    onClick={() => setShowInviteModal(true)}
                    className="bg-[#e43827] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ea6254] transition-colors flex items-center space-x-2 mt-4 lg:mt-0"
                >
                    <UserPlus size={20} />
                    <span>Undang Anggota Baru</span>
                </button>
            </div>

            {/* Team Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                            <Users size={24} className="text-white" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">
                        {teamMembers.length}
                    </h3>
                    <p className="text-gray-600">Total Anggota Tim</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                            <Shield size={24} className="text-white" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">
                        {
                            teamMembers.filter((m) => m.status === "active")
                                .length
                        }
                    </h3>
                    <p className="text-gray-600">Anggota Aktif</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                            <Mail size={24} className="text-white" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1C252C]">
                        {
                            teamMembers.filter((m) => m.status === "pending")
                                .length
                        }
                    </h3>
                    <p className="text-gray-600">Undangan Pending</p>
                </div>
            </div>

            {/* Roles & Permissions */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Peran & Hak Akses
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {roles.map((role) => {
                        const IconComponent = role.icon;
                        return (
                            <div
                                key={role.id}
                                className="border border-gray-200 rounded-lg p-4"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${role.color}`}
                                    >
                                        <IconComponent size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-[#1C252C]">
                                            {role.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {role.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-700">
                                        Hak Akses:
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {role.permissions.map(
                                            (permission, index) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                                                >
                                                    {permission}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h2 className="text-xl font-bold text-[#1C252C] mb-6">
                    Anggota Tim
                </h2>

                <div className="space-y-4">
                    {teamMembers.map((member) => {
                        const roleInfo = getRoleInfo(member.role);
                        const RoleIcon = roleInfo.icon;

                        return (
                            <div
                                key={member.id}
                                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-[#e43827] rounded-full flex items-center justify-center">
                                        <span className="text-white font-semibold">
                                            {member.avatar}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-[#1C252C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {member.email}
                                        </p>
                                        {member.lastActive && (
                                            <p className="text-xs text-gray-500">
                                                Terakhir aktif:{" "}
                                                {new Date(
                                                    member.lastActive
                                                ).toLocaleDateString("id-ID")}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${roleInfo.color}`}
                                        >
                                            <RoleIcon size={16} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {roleInfo.name}
                                        </span>
                                    </div>

                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                            member.status
                                        )}`}
                                    >
                                        {getStatusText(member.status)}
                                    </span>

                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() =>
                                                handleEditMember(member.id)
                                            }
                                            className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                                            aria-label={`Edit ${member.name}`}
                                        >
                                            <Edit
                                                size={16}
                                                className="text-gray-500"
                                            />
                                        </button>
                                        <button
                                            onClick={() =>
                                                handleRemoveMember(
                                                    member.id,
                                                    member.name
                                                )
                                            }
                                            className="p-2 hover:bg-red-100 rounded-lg transition-colors"
                                            aria-label={`Remove ${member.name}`}
                                        >
                                            <Trash2
                                                size={16}
                                                className="text-red-500"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-[#1C252C]">
                                Undang Anggota Baru
                            </h3>
                            <button
                                onClick={handleCloseModal}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        <form
                            onSubmit={handleInviteSubmit}
                            className="space-y-4"
                        >
                            <div>
                                <label
                                    htmlFor="invite-email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="invite-email"
                                    type="email"
                                    value={inviteEmail}
                                    onChange={(e) =>
                                        setInviteEmail(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827]"
                                    placeholder="nama@perusahaan.com"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="invite-role"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Peran
                                </label>
                                <select
                                    id="invite-role"
                                    value={inviteRole}
                                    onChange={(e) =>
                                        setInviteRole(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e43827]"
                                    required
                                >
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name} - {role.description}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="flex space-x-3 mt-6">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 bg-[#e43827] text-white rounded-lg hover:bg-[#ea6254] transition-colors"
                                >
                                    Kirim Undangan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamPage;
